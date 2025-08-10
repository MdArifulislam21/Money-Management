export default function ProfileImage() {
    const users = [
    {
      avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      handle: "Ok"
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      handle: "AnotherUser"
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", // fallback image
      handle: "Anonymous"
    }
  ]
  console.log(users);
    return (
    <div>
        <div class="flex items-center space-x-2 text-base">
            <h4 class="font-semibold text-slate-900">Contributors</h4>
            <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
        </div>
        <div class="mt-3 flex -space-x-2 overflow-hidden">
            
            {users.map((user, index) => (
                <img
                    key={index}
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src={
                    user.avatarUrl ||
                    "https://via.placeholder.com/150?text=No+Image"
                    }
                    alt={user.handle || "User"}
                />
                ))}
            
        </div>
        <div class="mt-3 text-sm font-medium">
            <a href="#" class="text-blue-500">+ 198 others</a>
        </div>
    </div>
    )
}