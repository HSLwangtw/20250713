import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-full p-6'>
      <h2 className='text-white'>没有找到Not Found</h2>
      <p className='text-white'>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}