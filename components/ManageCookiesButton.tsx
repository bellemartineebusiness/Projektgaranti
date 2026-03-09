'use client'

export default function ManageCookiesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
      className="hover:text-gray-300 transition-colors underline underline-offset-2"
    >
      Hantera cookies
    </button>
  )
}
