import { useState } from 'react'
import './App.css'

const notificationsData = [
  {
    id: 1,
    user: 'Mark Webber',
    action: 'reacted to your recent post',
    post: 'My first tournament today!',
    time: '1m ago',
    avatar: 'avatar-mark-webber.webp',
    unread: true
  },

  {
    id: 2,
    user: 'Angela Gray',
    action: 'followed you',
    time: '5m ago',
    avatar: 'avatar-angela-gray.webp',
    unread: true
  },

  {
    id: 3,
    user: 'Jacob Thompson',
    action: 'has joined your group',
    group: 'Chess Club',
    avatar: 'avatar-jacob-thompson.webp',
    time: '1 day ago',
    unread: true
  },

  {
    id: 4, user: 'Rizky Hasanuddin',
    action: 'sent you a private message',
    time: '5 days ago',
    avatar: 'avatar-rizky-hasanuddin.webp',
    message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
    unread: false
  },

  {
    id: 5,
    user: 'Kimberly Smith',
    action: 'ommented on your picture',
    time: '1 week ago',
    avatar: 'avatar-kimberly-smith.webp',
    picture: 'image-chess.webp',
    unread: false
  },

  {
    id: 6,
    user: 'Nathan Peterson',
    action: 'reacted to your recent post',
    post: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
    avatar: 'avatar-nathan-peterson.webp',
    unread: false
  },

  {
    id: 7,
    user: 'Anna Kim',
    action: 'left the group',
    group: 'Chess Club',
    time: '2 weeks ago',
    avatar: 'avatar-anna-kim.webp',
    unread: false
  }
]

const Notification = ({ notification, onMarkAsRead }) => {
  return (
    <div className={`flex ${notification.unread ? 'bg-veryLightGrayishBlue' : 'bg-white'} p-4 rounded-lg mb-3 text-start justify-between items-center`}
      onClick={() => onMarkAsRead(notification.id)}>
      <div className='flex'>
        <img className='w-9 h-9 sm:w-10 sm:h-10 rounded-full mr-3' src={`/${notification.avatar}`}
          alt={`${notification.user}'s name`} />
        <div className='flex flex-col flex-grow'>
          <div className='flex flex-row items-center flex-wrap'>
            <p className='text-sm sm:text-base items-center'>
              <span className='font-extrabold text-veryDarkBlue cursor-pointer hover:text-secondaryBlue'>{notification.user} </span>
              <span className='text-darkGrayishBlue'>{notification.action}</span>
              {notification.post && <span className='font-extrabold text-darkGrayishBlue cursor-pointer hover:text-secondaryBlue'> {notification.post} </span>}
              {notification.group && <span className='text-secondaryBlue font-extrabold cursor-pointer'> {notification.group} </span>}
              {notification.unread && <div className="w-2 h-2 bg-primaryRed inline-flex rounded-full ml-2"></div>}
            </p>
            {/* {notification.unread && <div className="w-2 h-2 bg-primaryRed rounded-full ml-2"></div>} */}
          </div>
          <div>
            <p className='text-sm text-grayishBlue'>{notification.time}</p>
            {notification.message && (
              <p className='cursor-pointer mt-2 text-darkGrayishBlue text-sm border-lightGrayishBlue2 border p-3 rounded-lg hover:bg-lightGrayishBlue1 hover:border-transparent transition-all duration-300'>{notification.message}</p>
            )}
          </div>
        </div>
      </div>
      {notification.picture && (
        <img
          src={`${notification.picture}`}
          alt="Attached picture"
          className="w-10 h-10 object-cover cursor-pointer rounded-lg transition-all duration-300 hover:scale-125 hover:border-solid hover:border-2"
        />
      )}
    </div>
  )
}

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  const unreadCount = notifications.filter(notification => notification.unread).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      unread: false
    })));
  };

  const onMarkAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, unread: false } : notification
    ));
  };


  return (
    <div className='max-w-screen-mobile md:max-w-screen-desktop bg-white p-4 sm:p-8 rounded-2xl max-w-[730px]'>
      <div className='flex flex-row justify-between items-center mb-6'>
        <div className='flex justify-center items-center'>
          <p className='text-veryDarkBlue font-extrabold text-xl sm:text-2xl mr-2'>Notifications</p>
          <p className='bg-secondaryBlue px-3 text-white rounded-md'>{unreadCount}</p>
        </div>
        <p
        onClick={markAllAsRead}
          className='text-darkGrayishBlue hover:text-secondaryBlue cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondaryBlue rounded px-2 py-1 transition duration-300'
        >Mark all as read</p>
      </div>
      <div>
        {notificationsData.map((notification) => (
          <Notification key={notification.id} notification={notification} onMarkAsRead={onMarkAsRead} />
        ))}
      </div>
    </div>
  )
}

export default App
