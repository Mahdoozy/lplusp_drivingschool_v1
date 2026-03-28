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
    <section id="about" className="py-16 sm:py-20 bg-[#0f1623]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Meet Your Instructors</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Instructor cards */}
          <div className="flex flex-col gap-6">
            {instructors.map((instructor) => (
              <div key={instructor.name} className="bg-[#1a2235] rounded-2xl p-6 flex flex-col sm:flex-row gap-5">
                {/* Gold circle with initial */}
                <div className="w-20 h-20 rounded-full bg-[#FFD700] flex-shrink-0 flex items-center justify-center shadow-lg">
                  <span className="text-[#0f1623] font-extrabold text-3xl">{instructor.initial}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-white font-bold text-xl">{instructor.name}</h3>
                    <p className="text-[#FFD700] text-sm font-semibold">{instructor.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{instructor.years}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="bg-[#0f1623] text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-700"
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
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              20+ Years Teaching Sydney to Drive
            </h3>
            <p className="text-gray-300 leading-relaxed">
              L Plus P Driving School was founded in 1997 by Mick with a simple mission: to produce safe, confident drivers who pass their test first time. Over the past two decades we have helped more than 1,000 students across the Sydney region get their licence and take to the road with confidence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              All lessons are conducted in our late-model automatic cars. Whether you are a complete beginner, a nervous driver, or converting an overseas licence, we tailor every lesson to your individual needs. Our free pick-up service and 3-for-1 logbook scheme make us the smartest choice for learners across North Ryde and 23 surrounding suburbs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
