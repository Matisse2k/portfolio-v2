import './App.css'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from './data/projects'

function App() {


  return (
    <div className="min-h-screen bg-white">
      {/* Header met contact links */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Matisse</h1>
            {/* Contact links komen hier */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Email</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-4">Welkom op mijn portfolio</h2>

        {/* About Me Section */}
        <Section title="About me" borderColor="border-green-600">
            Ik ben een full-stack developer met ervaring in Vue, React, Spring Boot, en databases.
            Ik heb al meerdere projecten gebouwd met volledige backends en frontends.
            Wat mij onderscheidt? Ik ben niet alleen technisch sterk, maar ook heel sociaal en communicatief
        </Section>

        {/* Projects Section */}
        <Section title="Projects" borderColor="border-yellow-600">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

      </main>


    </div>
  )
}

export default App
