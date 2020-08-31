import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/auth";
import { UserProps } from "../../services/auth";

import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import logoImg from "../../assets/images/logo.svg";
import power from "../../assets/images/icons/power.svg";
import avatarPlaceholder from "../../assets/images/icons/user.svg";

import {
  HomeWrapper,
  HomeGrid,
  HeaderWrapper,
  Avatar,
  Username,
  SignOutButton,
  LogoAside,
  HeroAside,
  Welcome,
  Connections,
  Buttons,
  Study,
  GiveClass,
} from "./styles";

import api from "../../services/api";

const Landing: React.FC = () => {
  const history = useHistory();

  const [avatar, setAvatar] = useState<UserProps | null>(null);
  const [name, setName] = useState("");
  const [totalConnections, setTotalConnections] = useState(0);
  const { signed, signOut, user } = useAuth();

  useEffect(() => {
    if (signed) {
      setAvatar(user?.avatar!);
      setName(user?.name!);
    }

    async function getConnections() {
      const response = await api.get("/connections");
      const { total } = response.data;
      setTotalConnections(total);
    }
    getConnections();
  }, [signed, user]);

  function handleSignOut() {
    signOut();
    return history.push("/sign-in");
  }

  return (
    <HomeWrapper>
      <HomeGrid>
        {signed && (
          <HeaderWrapper>
            <Link to={`/user/profile`}>
              <Avatar
                img={
                  avatar
                    ? `http://localhost:3333/img/${avatar}`
                    : avatarPlaceholder
                }
              />
              <Username>{name}</Username>
            </Link>
            <SignOutButton onClick={handleSignOut}>
              <img src={power} alt="Sign-out" />
            </SignOutButton>
          </HeaderWrapper>
        )}
        <LogoAside>
          <div>
            <img src={logoImg} alt="Proffy-logo" />
            <h1>Sua plataforma de estudos online.</h1>
          </div>
        </LogoAside>
        <HeroAside src={landingImg} />
        <Welcome>
          Seja bem vindo.
          <br />
          <b>O que deseja fazer?</b>
        </Welcome>
        <Buttons>
          <Study to="/study">
            <img src={studyIcon} alt="Study-button" />
            Estudar
          </Study>
          <GiveClass to="/give-classes">
            <img src={giveClassesIcon} alt="GiveClass-button" />
            Dar Aulas
          </GiveClass>
        </Buttons>
        <Connections>
          Total de: {totalConnections} conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </Connections>
      </HomeGrid>
    </HomeWrapper>
  );
};

export default Landing;
