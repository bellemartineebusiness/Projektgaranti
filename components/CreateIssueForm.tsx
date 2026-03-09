'use client'

import { useState } from 'react'

interface CreateIssueFormProps {
  owner?: string
  repo?: string
  onCreated?: (issue: Record<string, unknown>) => void
}

export default function CreateIssueForm({
  owner = 'bellemartineebusiness',
  repo = 'Projektgaranti',
  onCreated,
}: CreateIssueFormProps) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/create-issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ owner, repo, title, body }),
      })

      const data: Record<string, unknown> = await response.json()

      if (!response.ok) {
        const message =
          typeof data.error === 'string' ? data.error : `Request failed (${response.status})`
        setError(message)
        return
      }

      setSuccess(true)
      setTitle('')
      setBody('')
      onCreated?.(data)
    } catch {
      setError('Network error: could not reach the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create GitHub Issue</h2>

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl mb-6 font-medium">
          ✓ Issue created successfully in {owner}/{repo}!
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl mb-6 font-medium">
          ✕ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="issue-title" className="block text-sm font-semibold text-gray-700 mb-2">
            Title <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="issue-title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50"
            placeholder="Issue title"
          />
        </div>

        <div>
          <label htmlFor="issue-body" className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="issue-body"
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none disabled:opacity-50"
            placeholder="Describe the issue..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating…' : 'Create Issue'}
        </button>
      </form>
    </div>
  )
}
