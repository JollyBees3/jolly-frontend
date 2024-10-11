import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Search Icon
import book1 from "../../../assets/images/48Laws.jpeg";
import book2 from "../../../assets/images/beNot.jpeg";
import book3 from "../../../assets/images/Breath.jpeg";
import book4 from "../../../assets/images/harryPotter.jpeg";
import book5 from "../../../assets/images/notAboutABoy.jpeg";
import book6 from "../../../assets/images/theGreatGatsby.jpeg";
import book7 from "../../../assets/images/thelchemist.jpeg";
import book8 from "../../../assets/images/twistedLove.jpeg";

const FeaturedBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (searchTerm) {
      // Redirect to a book category or search page
      window.open(`https://www.goodreads.com/search?q=${encodeURIComponent(searchTerm)}`, "_blank");
    }
  };

  const books = [
    { id: 1, image: book1, title: "48 Laws of Power", link: "https://www.amazon.com/48-Laws-Power-Robert-Greene/dp/0140280197" },
    { id: 2, image: book2, title: "Be Not Afraid", link: "https://www.amazon.com/Be-Not-Far-Mindy-McGinnis/dp/0062561634/ref=sr_1_1?crid=2UI67WQU6BOCS&dib=eyJ2IjoiMSJ9.0DmOzSTDfLWv8IY7WwfIsPC3a0I7_rDzT3zF5YnD6jT8lbTC0ToJ5CBYCPw0CR3CcaHphztYwi1S1R-zpmORanWOa8PSrBsfd8pxDxiOtmoPKEgr5Bo3xuR1Ko9ReU8yIHqTOUcOwRYs28gCjwSPjnzUH9CuE3mJ3f0Qs81AxUub-iufhhvIp3FGFpcuNV-KneIvQOuxwFk4K3tw5Xn9iBooLRO_5KAtAjX8jm7-lR0.xUOLfnPn-9d8zd7G3NdhWxVnitoPR08AeURaZsRO1MQ&dib_tag=se&keywords=Be+Not+far+from+me&qid=1728616939&s=books&sprefix=be+not+far+from+me%2Cstripbooks-intl-ship%2C361&sr=1-1" },
    { id: 3, image: book3, title: "Breath Like Water", link: "https://www.amazon.com/Breath-Like-Water-Anna-Jarzab/dp/1335406328/ref=sr_1_1?crid=PLE3UHXIOA9A&dib=eyJ2IjoiMSJ9.GkwXQEoPuU5hvZwCe6kw8eF6ReMshfnJ2qUcPOG74SzDsnwi6Vp5tXEvEkc7JPuVWTkHxMiz28PMqtfIorzx3rKTtpMTOsBGh6N38tI-vrfvgNt5kDMzsGxNPAN4Bb56AgtRqwkM2HUA9yMd-ONYYqjXNteu_4KwH8wqASMV1ir_PJ7FKAvSMcWDcBQMpV7Aih-GBLApFDkrhHKphuzLV9sRIH2Od8ozkKI2_EpkmkE.Y-_87c6wgDeOl05Kbsh4bm6tCIx3vApyDcSU0HrMdt0&dib_tag=se&keywords=breath+like+water&qid=1728617019&sprefix=breath+like+water%2Caps%2C498&sr=8-1" },
    { id: 4, image: book4, title: "Harry Potter", link: "https://www.amazon.com/Harry-Potter-Philosophers-Stone-Irish/dp/1408866196/ref=sr_1_23?crid=3O8VDJNWR75E5&dib=eyJ2IjoiMSJ9.Q2sO83gVE3Jf8UHZOH83s1mXVbXJHuol613SYy9mJKsM7a6B9s5flqtFb6PAz7PuvmnvKQbdz_8Mz4raisNGs7UHoPBUlufbLT0pdiZHehf9UeECJmF4mKzR2_Lo2eCppgz4Al8YjeUe_c5pz7Dp-G7lB94bZqCLYJqZBfKWFz8mfxi4win9jjsIVIjkIx1GDrcDnzjDjo2Uio6_3Zmj3tWfsR9MWxMAbjSxU-MLrVsu_zppkszrVdYZR5D_PfeepO1j4vVpVRboRFzw9wNE6AeKg74u0jAkVUfqZqkcO7Q.NdrGy5ieAgD8EHLOxttSd_jL5KZwAcLBZJV57ogsfMg&dib_tag=se&keywords=harry+potter+and+the+philosopher%27s+stone&qid=1728617078&sprefix=harry+potter+and+the+%2Caps%2C478&sr=8-23" },
    { id: 5, image: book5, title: "Not About A Boy", link: "https://www.amazon.com/Not-About-Boy-Myah-Hollis/dp/0063341980/ref=sr_1_1?crid=1YYMQHO4L78VN&dib=eyJ2IjoiMSJ9.c2ZtByBXKuAPEJ1fuG6LjA.GEtSv1SooRUmrrmrIuZBsspMbDTbwidUTP1_OR4LoGA&dib_tag=se&keywords=not+about+a+boy+myah+hollis&qid=1728617136&sprefix=not+about+%2Caps%2C716&sr=8-1" },
    { id: 6, image: book6, title: "The Great Gatsby", link: "https://www.amazon.com/Great-Gatsby-Leonardo-DiCaprio/dp/B00ESY6TKY/ref=sr_1_8?crid=36ND6OAX6YVSX&dib=eyJ2IjoiMSJ9.oF-yws3iJXFTYaYx2asgP6af4XKKrYkTg9VQj5Spw-tFORgJgJXg-_YUgg1DVoEil2zz7s-ZCfeX04zesmpWog0c4V9eRixyyeVal90CDIdnXWvEqWNlOEPmJjudthIDDk9pv9Mp_akT69a8RRecy3vl2yaCPBQKu70S8ky-tv1DG0GrRu6opjZ4q_wXfcSn30GZDEktbWFnN5bKVWizJdy7fWwkkAQGJrLaW4dFb-U.2NjXkJUfTOdzvOzfx2-IWj47wHLahvIf-YZjpwGw_a0&dib_tag=se&keywords=the+great+gatsby&qid=1728617173&sprefix=the+great%2Caps%2C611&sr=8-8" },
    { id: 7, image: book7, title: "The Alchemist", link: "https://www.amazon.com/Alchemist-Robert-Ginty/dp/B002SJ4BX8/ref=sr_1_1?crid=2LWU18U7JABBW&dib=eyJ2IjoiMSJ9.ujaOP3aWKLvBUPCwzdVJn_LoioUx2WwLdO22pBzscKu0SKw3Z7uitiqMVxU4MVkITYyGFLdpTSvRnf1l5iBMmdmZACleVx3rjU9pOZJQL_AMvbs6CY6IRY8DyiNj7V5f9tsQSvKhRCt2OY6Oz3UNT_8qpAouZw3cXwUew6KNpUQ6hHoAqh2heC6XRrvY2r-WFVzvWjJL0tgDGe6rLQUgACt_Q00DBLByEk5v7qlRLjA.eCNCjrBzqvUi1WhqmMAetFEspylxt6FTLaN0DqIDgpk&dib_tag=se&keywords=the+alchemist&qid=1728617270&s=instant-video&sprefix=the+alchemist%2Cinstant-video%2C744&sr=1-1" },
    { id: 8, image: book8, title: "Twisted Love", link: "https://www.amazon.com/Hand-That-Rocks-Cradle/dp/B084F6Y4Q1/ref=sr_1_1?crid=3KRI7FU2FWCMK&dib=eyJ2IjoiMSJ9.lNIqD62w8nv_ZWCW4-Pb24WSE8R7LSkPLpP5i0vZp6NwMtaMwDmEJBk-ZttsoFpWiK0Jni4AYMgw51gR-CUUBE_DRmfepjG5lacO_1hQbPX9VLCbvQmVpdS5Mekx0kCNf8Kf_XCBEC3sk_ruwUiPKpJt1z3cBK6TeUg-upfUjIe21tNszRilfEj9SLSagFH_Ouk3LuMSCkDBzLeLMfraUfo2LYTLqbFNWldFGDNIRRA.TZRb45BS_saM2ClAnrANvJWTsJtAul_GhePVJFJafKU&dib_tag=se&keywords=twisted+love&qid=1728617372&s=instant-video&sprefix=ywisted%2Cinstant-video%2C538&sr=1-1" },
  ];

  return (
    <section className="py-12">
      {/* First Section - Heading, Search Bar, and Paragraph */}
      <div className="bg-blue-800 text-white p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Books</h2>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex justify-center items-center mb-4">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search for featured books"
              className="w-full p-3 rounded-full text-black focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faSearch} className="text-black" />
            </button>
          </div>
        </form>

        {/* Description Paragraph */}
        <p className="text-lg">
          Explore our selection of featured books carefully curated for readers who want to dive into something special!
        </p>
      </div>

      {/* Second Section - Book Grid */}
      <div className="bg-white p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            {/* Wrap the image in a Link that points to the BookDetails page */}
            <Link to={`/bookdetails/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </Link>

            {/* Hover Overlay with Search Icon */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-white text-4xl"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
