const instructors = [
  {
    name: 'Mick',
    initial: 'M',
    title: 'Head Instructor',
    years: '20+ years experience',
    specialties: ['Learner drivers', 'Test preparation', 'Nervous drivers', 'Overseas conversion'],
  },
  {
    name: 'Sidra',
    initial: 'S',
    title: 'Senior Instructor',
    years: 'Expert instructor',
    specialties: ['Learner drivers', 'Female students', 'Logbook hours', 'Overseas conversion'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="section-label">Our Team</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#f0f2f8]">
            Meet Your Instructors
          </h2>
          <span className="section-rule" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Instructor cards */}
          <div className="flex flex-col gap-5">
            {instructors.map((instructor) => (
              <div
                key={instructor.name}
                className="brand-card rounded-xl p-6 flex flex-col sm:flex-row gap-5"
              >
                {/* Gold circle with initial */}
                <div
                  className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #F5C842, #d4a91a)' }}
                >
                  <span className="font-serif font-bold text-[#0a0f1e] text-3xl">
                    {instructor.initial}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="font-sans font-semibold text-xl text-[#f0f2f8]">
                      {instructor.name}
                    </h3>
                    <p className="font-sans text-sm font-medium text-[#F5C842] mt-0.5">
                      {instructor.title}
                    </p>
                    <p className="font-mono text-xs text-[#4a5a7a] mt-1">{instructor.years}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="font-sans text-[#8899bb] text-xs px-2.5 py-1 rounded"
                        style={{
                          background: 'var(--bg-primary)',
                          border: '1px solid rgba(30, 45, 74, 0.8)',
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Story text */}
          <div className="flex flex-col gap-5">
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#f0f2f8] leading-snug">
              20+ Years Teaching Sydney to Drive
            </h3>
            <p className="font-sans text-[#8899bb] leading-relaxed">
              L Plus P Driving School was founded in 1997 by Mick with a simple mission: to produce safe, confident drivers who pass their test first time. Over the past two decades we have helped more than 1,000 students across the Sydney region get their licence and take to the road with confidence.
            </p>
            <p className="font-sans text-[#8899bb] leading-relaxed">
              All lessons are conducted in our late-model automatic cars. Whether you are a complete beginner, a nervous driver, or converting an overseas licence, we tailor every lesson to your individual needs. Our free pick-up service and 3-for-1 logbook scheme make us the smartest choice for learners across North Ryde and 23 surrounding suburbs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
