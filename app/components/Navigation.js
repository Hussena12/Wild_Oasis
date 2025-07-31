import Link from "next/link";
import React from "react";

const navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/cabins">cabins</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="account">account</Link>
        </li>
      </ul>
    </div>
  );
};

export default navigation;
