import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Knowledge from "@/components/Knowledge"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"

const page = () => {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Knowledge />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default page