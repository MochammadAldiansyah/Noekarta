<form action="{{ route('logout') }}" method="POST">
    @csrf
    <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
        Logout
    </button>
</form>
