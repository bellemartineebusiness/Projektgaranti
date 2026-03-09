'use client'

import CreateIssueForm from '@/components/CreateIssueForm'

export default function CreateIssueDemoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">GitHub Issue Demo</h1>
        <p className="text-gray-500 mb-10">
          This page demonstrates the <code className="bg-gray-100 px-1 rounded">/api/create-issue</code>{' '}
          endpoint. Submitted issues are created directly in the{' '}
          <strong>bellemartineebusiness/Projektgaranti</strong> repository via a secure server-side
          call — the GitHub token is never exposed to the browser.
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <CreateIssueForm
            onCreated={(issue) => {
              console.log('Issue created:', issue)
            }}
          />
        </div>
      </div>
    </main>
  )
}
