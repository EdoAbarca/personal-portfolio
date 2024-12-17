import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Knowledge from "@/components/Grid"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Project from "@/components/Project"

const page = () => {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Knowledge />
				<Project />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default page