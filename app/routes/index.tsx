import { supabase } from "src/libs";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const {data} = await supabase.from('temp').select();

  return {
    data
  }
}

export default function Index() {

  const data = useLoaderData()

  console.log('supabase data : ',data)

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>PEO</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            가보자
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            사이드 프로젝트 !
          </a>
        </li>
      </ul>
    </div>
  );
}
