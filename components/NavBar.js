import Link from "next/link";



const NavBar = () => (
  <div>
      <Link href="/" >
        <a className="home">Home</a>
      </Link>
      <Link href="/about" >
        <a className="about">About</a>
      </Link>

<style jsx>{`

.home{
  color: blue 
}





`
}
</style>

    </div>
);
export default NavBar;



