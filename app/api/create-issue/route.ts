import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    console.error('[create-issue] GITHUB_TOKEN environment variable is not set')
    return NextResponse.json(
      { error: 'Server configuration error: GitHub token is not configured.' },
      { status: 500 }
    )
  }

  let body: { owner?: string; repo?: string; title?: string; body?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON in request body.' }, { status: 400 })
  }

  const { owner, repo, title, body: issueBody } = body

  if (!owner || !repo || !title) {
    return NextResponse.json(
      { error: 'Missing required fields: owner, repo, and title are required.' },
      { status: 400 }
    )
  }

  const githubApiUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/issues`

  let githubResponse: Response
  try {
    githubResponse = await fetch(githubApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ title, body: issueBody ?? '' }),
    })
  } catch (err) {
    console.error('[create-issue] Network error calling GitHub API:', err)
    return NextResponse.json(
      { error: 'Failed to reach GitHub API. Please try again later.' },
      { status: 502 }
    )
  }

  const responseData = await githubResponse.json()

  if (!githubResponse.ok) {
    console.error(
      `[create-issue] GitHub API error ${githubResponse.status}:`,
      responseData.message ?? responseData
    )
    return NextResponse.json(
      {
        error: `GitHub API error: ${responseData.message ?? 'Unknown error'}`,
        details: responseData.errors ?? undefined,
      },
      { status: githubResponse.status }
    )
  }

  return NextResponse.json(responseData, { status: 201 })
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed. Use POST.' }, { status: 405 })
}
