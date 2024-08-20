import '@heroicons/react/24/outline'
import './sidebar.css'

const sidebar = ()=>{
return <>
    <div className='w-60 border-0 h-screen bg-black px-4 fixed '>
        <ul className='pt-6'>
            <li className='text-white list-none flex items-center px-6 py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            Home</li>
            <li className='text-white list-none flex items-center px-6 py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white mr-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75h-7.5a3 3 0 00-3 3v4.5a3 3 0 003 3h7.5a3 3 0 003-3v-4.5a3 3 0 00-3-3zm-7.5 0v-1.5a3 3 0 013-3h3a3 3 0 013 3v1.5m-3 6.75l-3-2.25v4.5l3-2.25z" />
                </svg>
            Shorts</li>
            <li className='text-white list-none flex items-center px-6 py-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white mr-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M15.75 3v1.5M3 9.75h18M4.5 4.5h15A2.25 2.25 0 0121.75 6.75v12.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.25V6.75A2.25 2.25 0 014.5 4.5zM16.5 14.25l-4.5 4.5L9 16.5"/>
            </svg>
            Subscriptions</li>
            <hr className='my-5'/>
            <li className='text-white list-none flex items-center px-6 py-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white mr-8">
            <rect x="3" y="3" width="18" height="18" rx="2.25" ry="2.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 18.75a8.252 8.252 0 00-13.5 0"/>
            </svg>
            Your channel</li>
            <li className='text-white list-none flex items-center px-6 py-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white mr-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m4 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            History</li>
            <li className='text-white list-none flex items-center px-6 py-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white mr-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h12M6 13h12M6 17h12M10 5l5 4-5 4V5z"/>
            </svg>
            Playlist</li>
            <li className='text-white list-none flex items-center px-6 py-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white mr-8">
            <rect x="3" y="3" width="18" height="18" rx="2.25" ry="2.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 8.25l5.25 3.75L10 15V8.25z"/>
            </svg>
            Your videos</li>
            <li className='text-white list-none flex items-center px-6 py-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white mr-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m4 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Watch Later</li>
            <li className='text-white list-none flex items-center px-6 py-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white mr-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            Liked videos</li>
            
        </ul>
    </div>
</>
}

export default sidebar