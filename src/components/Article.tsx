import React from "react";

export default function Article() {
  return (
    <article id="article" className="section-padding bg-white">
      <div className="mx-auto max-w-4xl container-padding">
        <div className="prose prose-lg prose-slate max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Featured Article
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Empowering Seniors Through Compassionate Support
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Posted on <time dateTime="2024-09-11" className="font-semibold text-orange-600">September 11, 2024</time> by Spirit Alliance Social Team
            </p>
          </div>

                 <div className="grid lg:grid-cols-3 gap-12">
                   <div className="lg:col-span-2 space-y-8">
                     {/* Hero Image */}
                     <div className="relative rounded-2xl overflow-hidden shadow-xl">
                       <img 
                         src="https://media.istockphoto.com/id/96315913/photo/golden-autumn.jpg?s=612x612&w=0&k=20&c=ivCASktSUav-_egEHmr6y99NgtjL995QSIvviperDqQ="
                         alt="Elderly person receiving compassionate care and support"
                         className="w-full h-64 object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                     </div>
              <div className="text-xl text-slate-700 leading-relaxed">
                At Spirit Alliance Social, we believe that every senior deserves to feel valued, connected, and supported — not just cared for. Our comprehensive Senior Care & Support Services are built on that belief, combining professional social work principles with genuine human connection to help older adults live meaningful, independent lives.
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    Our Purpose
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Aging can bring changes not only in health, but also in social, emotional, and financial well-being. Spirit Alliance Social was founded to bridge those gaps — offering advocacy, guidance, and hands-on support that promote dignity, respect, and inclusion for every individual we serve.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    What We Do
                  </h3>
                  <p className="text-slate-600 mb-4">Our services focus on the whole person — addressing physical needs while nurturing emotional and social wellness. We provide:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-900">Personalized Social Support:</strong> One-on-one assistance with daily challenges, goal-setting, and accessing community resources.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-900">Advocacy & Case Management:</strong> Helping seniors navigate government programs, benefits, and healthcare systems with confidence.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-900">Emotional Wellness & Companionship:</strong> Reducing loneliness through meaningful conversation, activities, and peer engagement.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-900">Family Support & Education:</strong> Guiding families through the care process and offering resources to strengthen relationships.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-slate-900">Community Connection:</strong> Linking seniors to local events, volunteer opportunities, and support groups to keep them active and engaged.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    Our Approach
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our team of trained social service professionals and caregivers work together to provide compassionate, culturally sensitive, and client-centered care. Every visit, every plan, and every conversation starts with listening — because true support begins with understanding.
                  </p>
                </div>

              </div>
            </div>

                   <div className="space-y-6">
                     <div className="card p-6">
                       <h4 className="font-bold text-slate-900 mb-4">Our Values</h4>
                       <ul className="space-y-2 text-sm text-slate-600">
                         <li className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                           Compassion
                         </li>
                         <li className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                           Dignity
                         </li>
                         <li className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                           Respect
                         </li>
                         <li className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                           Inclusion
                         </li>
                       </ul>
                     </div>
                   </div>
          </div>
        </div>
      </div>
    </article>
  );
}
