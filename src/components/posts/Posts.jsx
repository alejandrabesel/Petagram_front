import { useEffect, useState } from "react";
import Post from "./Post/Post";

const Posts = () => {
  const users = [
    {
      userId: 1,
      name: "Pamela",
      lastName: "Luna",
      email: "pameluve@gmail.com",
      country: "Bolivia",
      city: "La Paz",
      pets: [
        {
          id: "u1p1",
          species: "Cat",
          age: "Young",
          gender: "Female",
          name: "Nebula",
          profilePicture: "https://cdn2.thecatapi.com/images/f1.jpg",
          posts: [
            {
              postId: "u1p1p1",
              date: "01/01/2023",
              title: "titulo de prueba",
              description: "Descripcion de prueba",
              image: "https://cdn2.thecatapi.com/images/f1.jpg",
            },
          ],
          looking_partner: true,
        },
        {
          id: "u1p2",
          species: "Cat",
          age: "Young",
          gender: "Male",
          name: "Nebula2",
          profilePicture: "https://cdn2.thecatapi.com/images/8gm.jpg",
          posts: [
            {
              postId: "u1p2p1",
              date: "01/01/2023",
              title: "titulo de prueba",
              description: "Descripcion de prueba",
              image: "https://cdn2.thecatapi.com/images/8gm.jpg",
            },
          ],
          looking_partner: false,
        },
        {
          id: "u1p3",
          species: "Cat",
          age: "Young",
          gender: "Female",
          name: "Nebula3",
          profilePicture: "https://cdn2.thecatapi.com/images/ajo.gif",
          posts: [
            {
              postId: "u1p3p1",
              date: "01/01/2023",
              title: "titulo de prueba",
              description: "Descripcion de prueba",
              image: "https://cdn2.thecatapi.com/images/ajo.gif",
            },
          ],
          looking_partner: true,
        },
      ],
    },
    {
      userId: 2,
      name: "Magaly",
      lastName: "Vera",
      email: "pameluve2@gmail.com",
      country: "Argentina",
      city: "Buenos Aires",
      pets: [
        {
          id: "u2p1",
          species: "Dog",
          age: "Young",
          gender: "Female",
          name: "Blacky",
          profilePicture:
            "https://images.dog.ceo/breeds/pointer-germanlonghair/hans2.jpg",
          posts: [
            {
              postId: "u2p1p1",
              date: "01/01/2023",
              title: "titulo de prueba",
              description: "Descripcion de prueba",
              image:
                "https://images.dog.ceo/breeds/pointer-germanlonghair/hans2.jpg",
            },
          ],
          looking_partner: true,
        },
        {
          id: "u2p2",
          species: "Dog",
          age: "Young",
          gender: "Female",
          name: "Blacky2",
          profilePicture:
            "https://images.dog.ceo/breeds/appenzeller/n02107908_5378.jpg",
          posts: [
            {
              postId: "u2p2p1",
              date: "01/01/2023",
              title: "titulo de prueba",
              description: "Descripcion de prueba",
              image:
                "https://images.dog.ceo/breeds/appenzeller/n02107908_5378.jpg",
            },
          ],
          looking_partner: false,
        },
        {
          id: "u2p3",
          species: "DOg",
          age: "Young",
          gender: "Female",
          name: "Blacky3",
          profilePicture:
            "https://images.dog.ceo/breeds/papillon/n02086910_695.jpg",
          posts: [
            {
              postId: "u2p3p1",
              date: "01/01/2023",
              title: "titulo de prueba",
              description: "Descripcion de prueba",
              image: "https://images.dog.ceo/breeds/papillon/n02086910_695.jpg",
            },
          ],
          looking_partner: true,
        },
      ],
    },
    {
      userId: 3,
      name: "Carlos",
      lastName: "Perez",
      email: "carlosperez@gmail.com",
      country: "Chile",
      city: "Santiago",
      pets: [
        {
          id: "u3p1",
          species: "Dog",
          age: "Young",
          gender: "male",
          name: "Firulais",
          profilePicture:
            "https://images.dog.ceo/breeds/husky/n02110185_8216.jpg",
          posts: [
            {
              postId: "u3p1p1",
              date: "01/01/2023",
              title: "titulo de prueba",
              description: "Descripcion de prueba",
              image: "https://images.dog.ceo/breeds/husky/n02110185_8216.jpg",
            },
          ],
          looking_partner: false,
        },
      ],
    },
  ];

  const mapDataBDtoPost = (data) => {
    let aux = [];
    data.forEach((user) => {
      let post = {};
      post.country = user.country;
      post.city = user.city;
      user.pets.forEach((pet) => {
        console.log({ pet });
        console.log(pet.posts);
        post.name = pet.name;
        post.profilePicture = pet.profilePicture;
        post.title = pet.posts[0].title;
        post.description = pet.posts[0].description;
        post.image = pet.posts[0].image;
        post.postId = pet.posts[0].postId;
        aux.push(post);
      });
      //   postParaPets(user.country, user.city, user.pets, aux);
    });
    return aux;
  };

  //   const postParaPets = (country, city, pets, aux) => {
  //     pets.forEach((pet) => {
  //       postParaPosts(
  //         country,
  //         city,
  //         pet.name,
  //         pet.profilePicture,
  //         pet.posts,
  //         aux
  //       );
  //     });
  //   };

  //   const postParaPosts = (country, city, name, profilePicture, posts, aux) => {
  //     posts.forEach((p) => {
  //       const post = {};
  //       post.title = p.title;
  //       post.description = p.description;
  //       post.image = p.image;
  //       post.country = country;
  //       post.city = city;
  //       post.name = name;
  //       post.profilePicture = profilePicture;
  //       aux.push(post);
  //     });
  //   };

  const posteos = mapDataBDtoPost(users);
  console.log(posteos);
  return (
    <div className="mx-auto flex flex-col justify-center pt-3">
      {posteos.map((post) => (
        <Post
          title={post.title}
          petName={post.name}
          description={post.description}
          image={post.image}
          profilePicture={post.profilePicture}
          country={post.country}
          city={post.city}
          key={post.postId}
        ></Post>
      ))}
    </div>
  );
};

export default Posts;
