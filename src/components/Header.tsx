import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserRound } from 'lucide-react'

const Header = ({ handleLogout }: { handleLogout: () => void }) => (
  <header className='bg-white shadow-sm fixed w-full z-50'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
      <h1 className='text-2xl font-semibold text-gray-900'>
        Panel de sensores
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <UserRound className='relative h-8 w-8 rounded-full' />
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Ajustes</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>Salir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
)

export default Header
