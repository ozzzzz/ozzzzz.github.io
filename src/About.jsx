function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            About Me
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <div className="pt-6">
              <dt>
                <h3 className="text-base font-semibold text-gray-900">
                  Who I am
                </h3>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                I'm a passionate developer who enjoys creating beautiful and functional web applications.
                I love working with modern technologies and continuously learning new skills.
              </dd>
            </div>
            <div className="pt-6">
              <dt>
                <h3 className="text-base font-semibold text-gray-900">
                  What I do
                </h3>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                I specialize in full-stack web development, with expertise in React, Node.js, and modern web technologies.
                I enjoy building user-friendly interfaces and solving complex problems.
              </dd>
            </div>
            <div className="pt-6">
              <dt>
                <h3 className="text-base font-semibold text-gray-900">
                  Get in touch
                </h3>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Feel free to reach out if you'd like to collaborate or just want to say hello!
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default About