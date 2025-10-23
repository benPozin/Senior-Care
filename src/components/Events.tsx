import SectionTitle from "./SectionTitle";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="mx-auto max-w-7xl container-padding">
        <SectionTitle title="Upcoming Programs & Events" />

        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blur-sm opacity-50">
            <EventCard
              img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              date="Dec 15 2024"
              title="Senior Wellness Workshop"
              description="Join us for a comprehensive wellness workshop covering physical health, mental wellness, and social connection strategies."
            />
            <EventCard
              img="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              date="Dec 22 2024"
              title="Holiday Community Gathering"
              description="Celebrate the season with fellow community members in a warm, welcoming environment filled with joy and connection."
            />
            <EventCard
              img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              date="Jan 8 2025"
              title="Technology Training Session"
              description="Learn how to use modern technology to stay connected with family and friends, manage health records, and access online resources."
            />
          </div>
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-2xl border border-orange-200">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h3>
              <p className="text-slate-600 mb-4">We're preparing exciting programs and events for our community.</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                Stay tuned for updates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}