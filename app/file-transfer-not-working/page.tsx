import React from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Clock, ArrowRight, ShieldAlert, CheckCircle2, Wifi } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'File Transfer Not Working? Troubleshooting & Fixes',
  description: 'Troubleshoot QuickTransfer issues: invalid 6-digit codes, expired transfer keys, file size limits, or slow upload speeds.',
  alternates: {
    canonical: 'https://quicktransfer.site/file-transfer-not-working',
  },
  openGraph: {
    title: 'File Transfer Not Working? Troubleshooting Guide',
    description: 'Quick solutions for invalid codes, expired transfers, size limits, and browser upload issues.',
    url: 'https://quicktransfer.site/file-transfer-not-working',
  },
};

export default function FileTransferNotWorkingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why does it say 'This transfer code is no longer valid'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "QuickTransfer codes are temporary and expire automatically within 5 or 10 minutes. If this error appears, the validity window has elapsed and the file has been purged. Ask the sender to upload again.",
        },
      },
      {
        "@type": "Question",
        "name": "Why did my file upload fail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upload failures typically occur if the total batch size exceeds 100MB, if internet connectivity was interrupted, or if browser memory was exhausted. Ensure your files are under 100MB and retry on a stable connection.",
        },
      },
      {
        "@type": "Question",
        "name": "Why is my transfer slow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upload and download speeds depend directly on your local Wi-Fi or cellular uplink speed. For fast transfers, ensure a solid internet connection.",
        },
      },
    ],
  };

  return (
    <main className="flex-1 px-4 pt-32 pb-16 bg-white dark:bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="bg-red-50 dark:bg-red-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-red-100 dark:border-red-500/20 shadow-lg shadow-red-500/10">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            File Transfer Not Working? Here is How to Fix It
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            Find fast solutions for invalid codes, expired transfer keys, file upload errors, and size limits.
          </p>
        </header>

        {/* Troubleshooting Cards */}
        <section className="space-y-6">
          {/* Issue 1: Code Expired */}
          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Error: "Code Expired" or "No Longer Valid"</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Cause:</strong> QuickTransfer files are designed to be temporary and have a strict 5 or 10 minute expiration timer. Once the timer reaches zero, the code is permanently invalidated.
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 text-sm">
              <span className="font-bold text-green-600 dark:text-green-400">Solution:</span> Ask the sender to re-upload the file on <Link href="/" className="text-red-500 font-bold hover:underline">QuickTransfer.site</Link> and share the new 6-digit code.
            </div>
          </div>

          {/* Issue 2: Invalid Code */}
          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Error: "Invalid Code"</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Cause:</strong> The 6 digits entered do not match any active transfer session in the database.
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 text-sm">
              <span className="font-bold text-green-600 dark:text-green-400">Solution:</span> Double-check the 6-digit number. Ensure there are no spaces or typos. If the sender just uploaded, wait 2–3 seconds for database synchronization.
            </div>
          </div>

          {/* Issue 3: Size Exceeded */}
          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Total Size Exceeds 100MB Limit</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Cause:</strong> QuickTransfer provides free transfers up to 100MB per batch. Files exceeding this threshold are blocked by the browser.
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 text-sm">
              <span className="font-bold text-green-600 dark:text-green-400">Solution:</span> Compress large video files or split multiple files into smaller individual transfers under 100MB each.
            </div>
          </div>

          {/* Issue 4: Stuck Upload */}
          <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Upload Progress Gets Stuck</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>Cause:</strong> Network dropouts on mobile cellular data or aggressive browser ad-blockers/extensions blocking WebSockets or API calls.
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 text-sm">
              <span className="font-bold text-green-600 dark:text-green-400">Solution:</span> Refresh the browser tab, disable VPN/ad-blocking on the page if active, and ensure you have a stable Wi-Fi connection.
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-gray-100 dark:border-slate-800">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to try a fresh transfer?
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-red-500/20"
          >
            Go to Homepage <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
