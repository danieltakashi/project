import Link from 'next/link'

export default function Index() {
  return (
    <ul>
      <li>
        <Link href="/business/[action]" as={`/business/location`}>
          <a>by Locations</a>
        </Link>
      </li>
      <li>
        <Link href="/business/[action]" as={`/business/date`}>
          <a>by date</a>
        </Link>
      </li>
    </ul>
  )
}
