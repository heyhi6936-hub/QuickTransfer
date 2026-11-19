import React from 'react';
import Link from 'next/link';
import { Smartphone, Monitor, ArrowRight, CheckCircle2, QrCode, Wifi } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'How to Send Files from Phone to PC (Fast & Wireless)',
  description: 'Learn how to send files from your phone to a computer instantly without cables, USB drives, or apps. Works across iPhone, Android, Windows, and Mac.',
  alternates: {
    canonical: 'https://quicktransfer.site/send-files-from-phone-to-pc',
  },
  openGraph: {
    title: 'How to Send Files from Phone to PC Without Cables',
    description: 'Transfer photos, videos, and documents from phone to computer using a simple 6-digit code or QR scan.',
    url: 'https://quicktransfer.site/send-files-from-phone-to-pc',
  },
};

export default function PhoneToPcPage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Send Files from Phone to PC Without Cables",
    "description": "Transfer documents, photos, and videos from smartphone to computer using browser-based code sharing.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Open QuickTransfer on your phone",
        "text": "Navigate to https://quicktransfer.site in Safari or Chrome on your smartphone.",
      },
      {
        "@type": "HowToStep",
        "name": "Select files to send",
        "text": "Tap the Send card and choose photos, documents, or videos up to 100MB.",
      },
      {
        "@type": "HowToStep",
        "name": "Note the 6-digit code or QR code",
        "text": "Once uploaded, a 6-digit transfer code and QR code appear on your phone screen.",
      },
      {
        "@type": "HowToStep",
        "name": "Download on your PC",
        "text": "Open QuickTransfer.site on your computer, enter the 6 digits in the Receive card, and click Download.",
      },
    ],
  };

  return (
    <main className="flex-1 px-4 pt-32 pb-16 bg-white dark:bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="bg-red-50 dark:bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-red-100 dark:border-red-500/20">
              <Smartphone className="w-8 h-8 text-red-500" />
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <div className="bg-blue-50 dark:bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-blue-100 dark:border-blue-500/20">
              <Monitor className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            How to Send Files from Phone to PC Wirelessly
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
            No USB cables, no Bluetooth pairing headaches, and no companion apps to install. Transfer files between Android or iPhone and any Windows or Mac desktop in seconds.
          </p>
          <div className="mt-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-red-500/20"
            >
              Transfer Files Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </header>

        {/* Step-by-Step Instructions */}
        <section className="bg-gray-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-slate-700/50 space-y-8">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white text-center">
            Step-by-Step Instructions
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
              <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-black shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Open QuickTransfer in your Phone's Browser</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Open Safari, Chrome, or any mobile browser on your iPhone or Android device and go to <Link href="/" className="text-red-500 font-bold hover:underline">QuickTransfer.site</Link>.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
              <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-black shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Upload Photos, Videos, or Files</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tap "Send a File" to choose files directly from your photo gallery, file manager, or iCloud/Google Drive up to 100MB.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
              <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center font-black shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enter the 6-Digit Code on Your PC</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  On your desktop or laptop computer, open QuickTransfer.site, type the 6-digit code shown on your phone into the "Receive a File" box, and hit Receive.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
              <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center font-black shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Instant Download on PC</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Click Download to save the files directly into your computer's Downloads folder at high speed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Platform Matrix */}
        <section className="space-y-6">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white text-center">
            Supported Device Combinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">iPhone (iOS) to Windows PC</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Forget iTunes or emailing yourself files. Transfer camera roll videos and PDFs directly in your browser without Apple cables.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Android to Mac (macOS)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                macOS doesn't natively support Android MTP USB transfers smoothly. QuickTransfer provides effortless wireless transfer in seconds.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

