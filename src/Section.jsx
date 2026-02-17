function Section(props) {
    return(
 <section className={`py-16 my-4 border-l-4 ${props.borderColor} pl-8`}>
      <h2 className="text-3xl font-bold mb-4">{props.title}</h2>
      <p className="text-gray-700 leading-relaxed max-w-3xl">
        {props.children}
      </p>
    </section>
    )
}

export default Section