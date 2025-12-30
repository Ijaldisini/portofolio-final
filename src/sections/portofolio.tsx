"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Award,
  Cpu,
  ExternalLink,
  ArrowRight,
  Layers,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SpareLog",
    desc: "SpareLog adalah website manajemen bengkel otomotif yang mendigitalisasi layanan dan stok untuk mengatasi kendala pencatatan manual. Solusi ini meningkatkan akurasi dan efisiensi operasional, menjadikan bisnis lebih profesional dan siap berkembang.",
    image: "/projects/sparelog.png",
    demo: "#portofolio",
    repo: "https://github.com/Ijaldisini/website-sparelog",
  },
  {
    id: 2,
    title: "BrownyGift",
    desc: "BrownyGift adalah website penyedia rangkaian bunga. Kami hadir sebagai solusi untuk menyampaikan pesan yang tak terucap melalui desain floral yang artistik. Dengan sentuhan personal di setiap rangkaian, BrownyGift memastikan setiap pemberian menjadi simbol apresiasi yang elegan dan berkesan bagi penerimanya.",
    image: "/projects/brownygift.png",
    demo: "#portofolio",
    repo: "https://github.com/Ijaldisini/BrownyGift",
  },
  {
    id: 3,
    title: "FarmEquip",
    desc: "FarmEquip adalah platform web full-stack untuk rental alat-alat pertanian modern. Proyek ini menggabungkan Laravel (PHP) sebagai frontend dan Go (Golang) sebagai REST API backend, dengan database MySQL dan penyimpanan gambar di Cloudinary.",
    image: "/projects/farmequip.png",
    demo: "#portofolio",
    repo: "https://github.com/Darrel-jpg/FarmEquip",
  }
];

const certificates = [
  "/certificates/pengurus.png",
  "/certificates/compiler.png",
  "/certificates/icom.png",
  "/certificates/ireach.png",
  "/certificates/bioetanol.png",
];

const techStack = [
  {
    name: "Python",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="url(#a)"
          d="M49.64 0C24.254 0 25.839 11.009 25.839 11.009l.028 11.406h24.225v3.424H16.245S0 23.997 0 49.61c0 25.615 14.179 24.707 14.179 24.707h8.462V62.432s-.457-14.18 13.952-14.18H60.62s13.5.219 13.5-13.046V13.273S76.17 0 49.64 0M36.282 7.67a4.354 4.354 0 0 1 4.358 4.358 4.356 4.356 0 0 1-6.027 4.028 4.35 4.35 0 0 1-2.69-4.028 4.355 4.355 0 0 1 4.359-4.358"
        />
        <path
          fill="url(#b)"
          d="M50.36 99.48c25.387 0 23.802-11.009 23.802-11.009l-.028-11.405H49.908V73.64h33.847S100 75.485 100 49.869c0-25.615-14.179-24.706-14.179-24.706H77.36v11.886s.457 14.179-13.952 14.179H39.38s-13.5-.218-13.5 13.047v21.933S23.83 99.48 50.36 99.48m13.359-7.67a4.355 4.355 0 0 1-4.028-6.026 4.35 4.35 0 0 1 4.028-2.69 4.355 4.355 0 0 1 4.027 6.027 4.355 4.355 0 0 1-4.027 2.69"
        />
        <defs>
          <linearGradient
            id="a"
            x1="9.61"
            x2="59.167"
            y1="8.948"
            y2="58.01"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#387EB8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="40.028"
            x2="93.247"
            y1="40.453"
            y2="90.762"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE052" />
            <stop offset="1" stopColor="#FFC331" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "PHP",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="#6E81B6"
          fillRule="evenodd"
          d="M50 75.677c27.614 0 50-11.345 50-25.338S77.614 25 50 25 0 36.345 0 50.339s22.386 25.338 50 25.338"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="m60.133 58.528 2.48-12.764c.56-2.881.095-5.03-1.383-6.388-1.43-1.314-3.86-1.953-7.426-1.953H49.51l1.228-6.324a.814.814 0 0 0-.797-.969h-5.928a.81.81 0 0 0-.798.659l-2.634 13.55c-.24-1.524-.83-2.835-1.774-3.916-1.74-1.99-4.49-3-8.176-3H19.14a.81.81 0 0 0-.798.658l-5.33 27.43a.81.81 0 0 0 .798.968h5.974c.39 0 .724-.276.798-.66l1.29-6.634h4.447c2.334 0 4.295-.252 5.826-.75 1.566-.51 3.006-1.373 4.276-2.562a13.1 13.1 0 0 0 2.526-3.136l-1.065 5.48a.81.81 0 0 0 .798.968h5.929a.814.814 0 0 0 .798-.658l2.925-15.056H52.4c1.734 0 2.242.345 2.38.493.125.135.385.612.093 2.116l-2.358 12.136a.815.815 0 0 0 .798.968h6.023a.81.81 0 0 0 .797-.656M32.65 47.981c-.373 1.914-1.074 3.279-2.086 4.057-1.028.793-2.672 1.194-4.887 1.194h-2.648l1.915-9.854h3.424c2.515 0 3.528.538 3.935.988.565.625.684 1.876.347 3.615m52.455-7.558c-1.738-1.99-4.489-3-8.175-3H65.44a.81.81 0 0 0-.798.658l-5.33 27.43a.814.814 0 0 0 .797.968h5.975c.39 0 .724-.276.798-.66l1.29-6.634h4.448c2.334 0 4.294-.252 5.825-.75 1.566-.51 3.007-1.373 4.276-2.562a13.1 13.1 0 0 0 2.59-3.247 13.2 13.2 0 0 0 1.41-3.915c.68-3.495.136-6.283-1.616-8.288m-5.817 7.558c-.373 1.914-1.074 3.279-2.085 4.057-1.029.793-2.672 1.194-4.887 1.194h-2.648l1.914-9.854h3.424c2.516 0 3.529.538 3.936.988.563.625.683 1.876.346 3.615"
          clipRule="evenodd"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M28.197 42.565q3.405 0 4.54 1.257 1.133 1.258.54 4.315-.621 3.184-2.388 4.546-1.77 1.362-5.382 1.362H21.87l2.232-11.48zm-14.558 23.1h5.974l1.418-7.291h5.118q3.387 0 5.575-.713 2.187-.712 3.977-2.386a12.2 12.2 0 0 0 2.432-3.045q.93-1.665 1.32-3.674.949-4.877-1.43-7.598-2.377-2.721-7.563-2.721H18.97zm30.201-34.72h5.929l-1.418 7.293h5.282q4.984 0 6.876 1.738t1.135 5.634l-2.48 12.765h-6.022L55.5 46.237q.403-2.072-.297-2.825t-2.974-.753h-4.738l-3.054 15.715H38.51zm30.994 11.621q3.405 0 4.54 1.257 1.133 1.258.54 4.315-.619 3.184-2.388 4.546t-5.38 1.362H68.51l2.23-11.48zm-14.56 23.1h5.976l1.417-7.291h5.118q3.389 0 5.576-.713 2.187-.712 3.977-2.386a12.2 12.2 0 0 0 2.43-3.045q.93-1.665 1.322-3.674.948-4.877-1.43-7.598-2.377-2.721-7.563-2.721h-11.49z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "C#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <g clipPath="url(#a)">
          <path
            fill="#A179DC"
            d="M94.74 29.324c-.001-1.677-.36-3.16-1.085-4.431-.713-1.25-1.78-2.3-3.211-3.128-11.815-6.812-23.64-13.603-35.45-20.423-3.185-1.838-6.272-1.77-9.432.094C40.859 4.209 17.316 17.698 10.3 21.76c-2.889 1.673-4.295 4.233-4.295 7.56-.005 13.7 0 27.4-.005 41.1 0 1.64.344 3.093 1.037 4.346.713 1.288 1.795 2.365 3.26 3.213 7.015 4.064 30.562 17.551 35.263 20.325 3.162 1.866 6.25 1.932 9.434.093 11.811-6.82 23.638-13.61 35.454-20.422 1.464-.847 2.546-1.925 3.259-3.213.692-1.252 1.037-2.706 1.037-4.346 0 0 0-27.392-.005-41.092"
          />
          <path
            fill="#280068"
            d="M50.508 49.737 7.038 74.766c.712 1.288 1.794 2.365 3.258 3.213C17.314 82.043 40.86 95.53 45.56 98.304c3.162 1.866 6.25 1.932 9.434.093 11.811-6.82 23.638-13.61 35.454-20.422 1.464-.847 2.546-1.925 3.259-3.213z"
          />
          <path
            fill="#390091"
            d="M94.74 29.324c-.001-1.677-.36-3.16-1.085-4.431L50.508 49.737l43.199 25.025c.692-1.252 1.036-2.706 1.037-4.346 0 0 0-27.392-.005-41.092"
          />
          <path
            fill="#fff"
            d="M76.102 40.38v4.678h4.678V40.38h2.34v4.678h4.677v2.34H83.12v4.678h4.678v2.339H83.12v4.678h-2.34v-4.678h-4.677v4.678h-2.34v-4.678h-4.678v-2.34h4.678v-4.678h-4.678v-2.339h4.678V40.38zm4.678 7.017h-4.678v4.679h4.678z"
          />
          <path
            fill="#fff"
            d="M50.603 16.884c12.203 0 22.857 6.627 28.563 16.478l-.055-.095-14.358 8.267c-2.828-4.79-8.014-8.022-13.963-8.088l-.187-.001c-9.071 0-16.426 7.353-16.426 16.425 0 2.966.791 5.747 2.167 8.149 2.83 4.943 8.153 8.277 14.26 8.277 6.142 0 11.495-3.377 14.312-8.372l-.068.12 14.335 8.305C73.54 76.116 63.031 82.722 50.97 82.854l-.367.002c-12.241 0-22.925-6.668-28.618-16.57a32.84 32.84 0 0 1-4.368-16.416c0-18.217 14.768-32.986 32.986-32.986"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M6 0h88.889v100H6z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "HTML",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="#E44D26"
          d="M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100"
        />
        <path fill="#F16529" d="M50.093 92.344V7.39h36.048l-6.88 76.811" />
        <path
          fill="#EBEBEB"
          d="M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32"
        />
        <path
          fill="#fff"
          d="M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271"
        />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="#264DE4"
          d="m94.175 0-8.033 89.99L50.034 100l-36.01-9.996L6 0z"
        />
        <path fill="#2965F1" d="m79.265 84.26 6.864-76.9H50.087v84.988z" />
        <path
          fill="#EBEBEB"
          d="m24.396 40.74.99 11.039h24.702V40.74zm25.692-22.342h-27.68l1.003 11.038h26.676zm-.001 62.495V69.408l-.048.013-12.294-3.32-.786-8.803H25.878l1.547 17.332 22.612 6.277z"
        />
        <path
          fill="#fff"
          d="m63.642 51.779-1.281 14.316-12.312 3.323v11.484l22.63-6.272.166-1.865 2.594-29.06.27-2.965L77.7 18.398H50.05v11.038h15.555L64.599 40.74H50.05v11.04z"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path fill="#F7DF1E" d="M100 0H0v100h100z" />
        <path
          fill="#000"
          d="M67.175 78.125c2.014 3.29 4.634 5.707 9.27 5.707 3.893 0 6.38-1.946 6.38-4.635 0-3.222-2.555-4.364-6.84-6.238l-2.35-1.008c-6.781-2.89-11.286-6.508-11.286-14.159 0-7.047 5.37-12.413 13.762-12.413 5.975 0 10.27 2.08 13.365 7.524l-7.317 4.699c-1.612-2.89-3.35-4.027-6.048-4.027-2.752 0-4.497 1.746-4.497 4.027 0 2.819 1.746 3.96 5.778 5.706l2.35 1.006c7.983 3.424 12.491 6.915 12.491 14.762 0 8.46-6.646 13.096-15.571 13.096-8.727 0-14.365-4.16-17.124-9.61zm-33.196.815c1.477 2.619 2.82 4.833 6.048 4.833 3.087 0 5.035-1.208 5.035-5.905V45.916h9.397v32.08c0 9.73-5.705 14.158-14.032 14.158-7.524 0-11.881-3.894-14.097-8.583z"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path fill="#017ACB" d="M0 0h100v100H0z" />
        <path
          fill="#fff"
          d="M48.016 37.031h4.797v8.282h-12.97v36.843l-.343.094c-.469.125-6.64.125-7.969-.016l-1.062-.093V45.312H17.5v-8.28l4.11-.048c2.25-.03 8.03-.03 12.843 0 4.813.032 10.906.047 13.563.047m36.61 41.219c-1.907 2.016-3.954 3.14-7.36 4.063-1.485.406-1.735.421-5.078.406-3.344-.016-3.61-.016-5.235-.438-4.203-1.078-7.594-3.187-9.906-6.172-.656-.843-1.734-2.593-1.734-2.812 0-.063.156-.203.359-.297s.625-.36.969-.562c.343-.204.968-.579 1.39-.797.422-.22 1.64-.938 2.703-1.579 1.063-.64 2.032-1.156 2.141-1.156.11 0 .313.219.469.485.937 1.578 3.125 3.593 4.672 4.28.953.407 3.062.86 4.078.86.937 0 2.656-.406 3.578-.828.984-.453 1.484-.906 2.078-1.812.406-.641.453-.813.438-2.032 0-1.125-.063-1.437-.375-1.953-.875-1.437-2.063-2.187-6.875-4.312-4.97-2.203-7.204-3.516-9.016-5.282-1.344-1.312-1.61-1.67-2.453-3.312-1.094-2.11-1.235-2.797-1.25-5.937-.016-2.204.031-2.922.265-3.672.329-1.125 1.391-3.297 1.875-3.844 1-1.172 1.36-1.531 2.063-2.11 2.125-1.75 5.438-2.906 8.61-3.015.359 0 1.546.062 2.656.14 3.187.266 5.359 1.047 7.453 2.72 1.578 1.25 3.968 4.187 3.734 4.577-.156.235-6.39 4.391-6.797 4.516-.25.078-.422-.016-.765-.422-2.125-2.547-2.985-3.094-5.047-3.219-1.469-.093-2.25.078-3.235.735-1.03.687-1.53 1.734-1.53 3.187.015 2.125.827 3.125 3.827 4.61 1.938.953 3.594 1.734 3.719 1.734.188 0 4.203 2 5.25 2.625 4.875 2.86 6.86 5.797 7.375 10.86.375 3.812-.703 7.296-3.047 9.765"
        />
      </svg>
    ),
  },
  {
    name: "Go",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="#00ACD7"
          d="M7.547 42.312c-.195 0-.243-.097-.146-.243l1.022-1.315c.098-.146.341-.243.536-.243H26.34c.194 0 .243.146.146.292l-.828 1.266c-.097.146-.34.292-.487.292zm-7.352 4.48c-.195 0-.243-.098-.146-.244l1.022-1.314c.098-.146.341-.244.536-.244h22.202c.195 0 .292.146.243.292l-.39 1.169c-.048.195-.243.292-.437.292zm11.783 4.48c-.195 0-.244-.147-.146-.293l.681-1.217c.098-.146.292-.292.487-.292h9.738c.195 0 .292.146.292.34l-.098 1.169c0 .195-.194.34-.34.34zm50.538-9.836c-3.067.779-5.16 1.363-8.18 2.142-.73.195-.779.244-1.411-.487-.73-.827-1.266-1.363-2.289-1.85-3.067-1.51-6.037-1.07-8.812.73-3.311 2.143-5.015 5.308-4.967 9.251.05 3.895 2.727 7.109 6.573 7.645 3.311.438 6.086-.73 8.277-3.214.439-.535.828-1.12 1.315-1.801h-9.397c-1.022 0-1.266-.633-.925-1.461.633-1.51 1.801-4.041 2.483-5.307.146-.292.487-.78 1.217-.78h17.723c-.098 1.316-.098 2.63-.292 3.945-.536 3.505-1.85 6.719-3.993 9.543-3.505 4.625-8.082 7.498-13.876 8.277-4.771.632-9.202-.293-13.097-3.214-3.603-2.726-5.648-6.33-6.184-10.809-.632-5.307.926-10.078 4.139-14.265 3.457-4.528 8.034-7.401 13.633-8.423 4.576-.828 8.958-.293 12.902 2.385 2.58 1.704 4.43 4.041 5.648 6.865.292.439.097.682-.487.828"
        />
        <path
          fill="#00ACD7"
          d="M78.632 68.36c-4.43-.097-8.472-1.362-11.88-4.284-2.872-2.483-4.674-5.648-5.258-9.397-.877-5.501.633-10.37 3.944-14.704 3.554-4.674 7.838-7.108 13.632-8.13 4.966-.877 9.64-.39 13.876 2.483 3.847 2.629 6.233 6.183 6.865 10.857.828 6.573-1.07 11.929-5.599 16.505-3.213 3.263-7.157 5.308-11.685 6.233-1.314.243-2.63.292-3.895.438M90.22 48.69c-.049-.632-.049-1.12-.146-1.606-.877-4.82-5.307-7.547-9.933-6.476-4.528 1.023-7.449 3.896-8.52 8.472-.876 3.798.974 7.644 4.48 9.202 2.677 1.169 5.355 1.023 7.936-.292 3.846-1.996 5.94-5.112 6.183-9.3"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="#06B6D4"
          d="M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991"
        />
      </svg>
    ),
  },
  {
    name: "Bootstrap 5",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="#7952B3"
          fillRule="evenodd"
          d="M20.77 10c-5.705 0-9.928 4.994-9.739 10.41.182 5.203-.054 11.942-1.75 17.438C7.578 43.36 4.7 46.852 0 47.3v5.06c4.7.45 7.578 3.94 9.28 9.453 1.697 5.495 1.933 12.234 1.751 17.438-.189 5.415 4.033 10.41 9.74 10.41h58.466c5.706 0 9.928-4.994 9.738-10.41-.181-5.204.055-11.943 1.751-17.438C92.43 56.3 95.3 52.809 100 52.36V47.3c-4.7-.45-7.571-3.94-9.274-9.452-1.697-5.495-1.932-12.234-1.75-17.438.189-5.415-4.033-10.41-9.739-10.41zm47.027 49.037c0 7.457-5.563 11.98-14.794 11.98H37.287a1.695 1.695 0 0 1-1.695-1.695V30.34a1.695 1.695 0 0 1 1.695-1.695h15.625c7.698 0 12.75 4.17 12.75 10.571 0 4.493-3.4 8.516-7.729 9.22v.235c5.894.646 9.863 4.728 9.863 10.366m-16.508-25.02h-8.96v12.656h7.547c5.834 0 9.05-2.349 9.05-6.548 0-3.935-2.766-6.108-7.637-6.108m-8.96 17.678v13.947h9.29c6.074 0 9.291-2.437 9.291-7.017s-3.307-6.93-9.682-6.93z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Laravel",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="#FF2D20"
          d="M98.494 22.485q.054.2.054.406v21.335a1.56 1.56 0 0 1-.782 1.349L79.86 55.885v20.433a1.56 1.56 0 0 1-.777 1.35L41.705 99.184c-.085.049-.179.08-.272.113-.035.012-.068.033-.105.043a1.6 1.6 0 0 1-.797 0c-.043-.012-.082-.035-.123-.05-.085-.032-.175-.059-.256-.106L2.782 77.668A1.56 1.56 0 0 1 2 76.318V12.316q.001-.21.055-.409c.011-.044.039-.085.054-.13.03-.082.057-.165.1-.241.028-.05.071-.091.106-.138.045-.062.086-.127.138-.18.045-.046.103-.079.154-.118.056-.046.107-.097.171-.134h.002L21.466.208a1.56 1.56 0 0 1 1.555 0l18.686 10.758h.004c.062.04.115.088.171.133.05.038.107.073.152.116.054.056.093.12.14.183.033.047.078.087.105.138.044.078.07.16.1.241.017.045.044.086.055.132q.054.2.055.407V52.29l15.57-8.966V22.89c0-.136.02-.274.055-.404.014-.047.039-.087.055-.132.03-.082.058-.166.1-.241.03-.05.073-.092.106-.138.046-.063.085-.127.14-.181.044-.045.1-.078.151-.117.059-.047.11-.097.171-.134h.002l18.688-10.759a1.56 1.56 0 0 1 1.556 0l18.686 10.759c.066.039.116.087.174.132.05.04.106.074.15.117.055.056.093.12.14.183.035.046.078.087.105.138.045.076.07.16.101.24.018.046.043.086.055.133m-3.06 20.84v-17.74l-6.54 3.764-9.034 5.201v17.74l15.575-8.965zM76.746 75.418V57.665l-8.885 5.075-25.375 14.482v17.92zM5.115 15.008v60.41L39.372 95.14V77.224L21.476 67.096l-.006-.004-.008-.004c-.06-.035-.11-.086-.167-.128-.049-.04-.105-.07-.148-.113l-.004-.006c-.05-.049-.085-.109-.128-.163-.04-.053-.086-.097-.117-.152l-.002-.006c-.035-.058-.056-.128-.082-.194-.025-.059-.058-.113-.073-.175v-.002c-.02-.074-.024-.152-.032-.228-.007-.058-.023-.116-.023-.175V23.974l-9.032-5.203-6.539-3.76zm17.13-11.654L6.678 12.316l15.565 8.962 15.567-8.964-15.567-8.96zm8.097 55.93 9.032-5.2V15.009l-6.54 3.764-9.033 5.201V63.05zM78.305 13.93l-15.567 8.96 15.567 8.962L93.87 22.89zm-1.558 20.62-9.033-5.201-6.54-3.765v17.741l9.032 5.2 6.541 3.766zm-35.82 39.98 22.834-13.036 11.413-6.514-15.555-8.956-17.91 10.311-16.323 9.398z"
        />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 101 100"
        className="w-8 h-8"
      >
        <path
          fill="#61DAFB"
          d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"
        />
        <path
          stroke="#61DAFB"
          strokeWidth="5"
          d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"
        />
        <path
          stroke="#61DAFB"
          strokeWidth="5"
          d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"
        />
        <path
          stroke="#61DAFB"
          strokeWidth="5"
          d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"
        />
      </svg>
    ),
  },
  {
    name: "Django",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="#2BA977"
          d="M46.206 0h16.342v74.898c-8.37 1.583-14.533 2.206-21.2 2.206C21.39 77.084 11 68.167 11 51.042c0-16.5 11.02-27.209 28.098-27.209 2.65 0 4.669.209 7.108.834zm.573 38.164c-1.914-.625-3.491-.833-5.51-.833-8.265 0-13.04 5.041-13.04 13.877 0 8.602 4.565 13.352 12.935 13.352 1.808 0 3.28-.102 5.615-.415z"
        />
        <path
          fill="#2BA977"
          d="M89.27 25.844v37.5c0 12.915-.967 19.125-3.806 24.48-2.65 5.147-6.141 8.393-13.355 11.979l-15.163-7.146c7.213-3.352 10.704-6.315 12.934-10.835 2.334-4.623 3.07-9.978 3.07-24.061V25.844zM71.304 0h16.342v16.604H71.303z"
        />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        className="w-8 h-8"
      >
        <path
          fill="#0ACF83"
          d="M33.333 100C42.533 100 50 92.533 50 83.333V66.667H33.333c-9.2 0-16.666 7.466-16.666 16.666S24.133 100 33.333 100"
        />
        <path
          fill="#A259FF"
          d="M16.667 50c0-9.2 7.466-16.667 16.666-16.667H50v33.334H33.333c-9.2 0-16.666-7.467-16.666-16.667"
        />
        <path
          fill="#F24E1E"
          d="M16.667 16.667C16.667 7.467 24.133 0 33.333 0H50v33.333H33.333c-9.2 0-16.666-7.466-16.666-16.666"
        />
        <path
          fill="#FF7262"
          d="M50 0h16.667c9.2 0 16.666 7.467 16.666 16.667s-7.466 16.666-16.666 16.666H50z"
        />
        <path
          fill="#1ABCFE"
          d="M83.333 50c0 9.2-7.466 16.667-16.666 16.667S50 59.2 50 50s7.467-16.667 16.667-16.667S83.333 40.8 83.333 50"
        />
      </svg>
    ),
  },
];

// --- COMPONENT UTAMA ---

export default function Portofolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="portofolio" className="relative py-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Portofolio <span className="text-emerald-400">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Jelajahi perjalanan saya melalui proyek, sertifikasi, dan keahlian
            teknis. Setiap bagian mewakili tonggak pencapaian dalam pembelajaran
            saya.
          </p>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
              activeTab === "projects"
                ? "bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Code2 size={20} /> Projects
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
              activeTab === "certificates"
                ? "bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Award size={20} /> Certificates
          </button>

          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
              activeTab === "tech"
                ? "bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Layers size={20} /> Tech Stack
          </button>
        </div>

        {/* KONTEN UTAMA (Berubah sesuai Tab) */}
        <div className="min-h-[400px]">
          {/* 1. TAB PROJECTS */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-800 flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Image Preview
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed text-justify">
                      {project.desc}
                    </p>

                    <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a
                        href={project.repo}
                        className="flex items-center gap-1 text-sm font-medium text-white hover:text-emerald-400 transition-colors ml-auto"
                      >
                        Details <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. TAB CERTIFICATES */}
          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-white/5 group"
                >
                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">
                    Certificate Image
                  </div>
                  <Image src={cert} alt={`Certificate ${index + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />

                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. TAB TECH STACK */}
          {activeTab === "tech" && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:bg-white/10 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    {/* LOGIC RENDER SIMPEL */}
                    {typeof tech.icon === "string" ? (
                      // Jika icon adalah path file (string), pakai Next Image
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    ) : (
                      // Jika icon adalah SVG JSX, render langsung apa adanya
                      tech.icon
                    )}
                  </div>
                  <span className="font-semibold text-gray-300 group-hover:text-emerald-400 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
