import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((ele) => (
        <li key={ele.id}>
          <Link href={`/news/${ele.slug}`}>
            <img src={`/images/news/${ele.image}`} alt={ele.title} />
            <span>{ele.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
