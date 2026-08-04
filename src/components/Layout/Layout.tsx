import { useEffect, useState } from "react"; 
import logo from "../../assets/free-icon-graduation-2997322.png"
import { styled } from "styled-components"
import "./Layout.css"

import { Link, NavLink, Outlet } from "react-router"
import CustomLink from "../CustomLink";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: rgb(219, 219, 219);
  padding: 0.5rem;
  height: 3rem;
` 

export default function Layout() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>
    <HeaderContainer>
        <div style={{display: "flex"}}>
          <img src={logo}></img>
          <h3 className="text-centered">Result university</h3>
        </div>

        <Link to={"/"}>Home</Link>
        <NavLink to={"/feedback"}>Feedback</NavLink> {/*Сам добавляет класс active*/}
        <CustomLink to={"/effect"}>Effect</CustomLink> {/* Своё поведение */}

        <div className="text-centered">{time.toLocaleTimeString()}</div>
    </HeaderContainer>

    <main className="container">
      <Outlet /> {/* Сюда выгружаются страницы */}
    </main>

    <footer>2026</footer>
  </>
}