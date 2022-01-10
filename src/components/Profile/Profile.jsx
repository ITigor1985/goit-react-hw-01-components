import React from "react";
import {
  UserCard,
  Description,
  Wrapper,
  Name,
  Tag,
  Location,
  UserAvatar,
  ImgWrapper,
  Stats,
  StatsItem,
} from "./Profyle.styled";

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <UserCard>
      <Description>
        <ImgWrapper>
          <UserAvatar src={avatar} alt="User avatar" />
        </ImgWrapper>

        <Wrapper>
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </Wrapper>
      </Description>

      <Stats>
        <StatsItem>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </UserCard>
  );
};

export default Profile;
