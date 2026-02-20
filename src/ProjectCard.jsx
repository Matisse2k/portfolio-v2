// Renders a single project card. Receives a project object from projects.js as a prop.
function ProjectCard({ project }) {
  const { title, description, tech, liveUrl, githubUrl } = project

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col gap-3">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-700 leading-relaxed">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {tech.map((tag) => (
          <span
            key={tag}
            className="text-sm bg-white border border-gray-300 rounded px-2 py-0.5 text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links — only rendered when a URL is provided */}
      {(githubUrl || liveUrl) && (
        <div className="flex gap-4 mt-1">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-700 hover:underline"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-700 hover:underline"
            >
              Live site
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectCard
