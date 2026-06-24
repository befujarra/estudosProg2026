import Profile from "./components/Profile"
import perfil from "./assets/perfil.jpg"

export default function App() {
  return (
    <>
      <Profile name="John Doe"
       avatar={perfil}
        bio="Software Engineer" 
       email="john.doe@example.com" 
       phone="(123) 456-7890" 
       githubUrl="https://github.com/johndoe" 
       linkedinUrl="https://linkedin.com/in/johndoe" />
    </>
  )
} 