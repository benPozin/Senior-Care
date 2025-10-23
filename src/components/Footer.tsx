export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" id="contact">
      <div className="mx-auto max-w-7xl container-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 grid place-content-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-lg shadow-lg">
                SA
              </div>
              <div>
                <h3 className="text-xl font-bold">Spirit Alliance Social</h3>
                <p className="text-slate-400 text-sm">Senior Care & Support</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Empowering seniors through compassionate support, professional care, and meaningful community connections. 
              We're here to help every senior live with dignity, respect, and independence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.55v-5.64c0-1.34-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.74H9.3V9h3.41v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.25ZM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">Family Support</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">Emotional Counselling</a></li>
              <li><a href="#" className="text-slate-300 hover:text-orange-400 transition-colors">Long-term Care Consultation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-slate-300">416-992-4915</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-slate-300">inna@spiritalliancesocial.com</p>
                  <p className="text-slate-400 text-sm">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Spirit Alliance Social. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}