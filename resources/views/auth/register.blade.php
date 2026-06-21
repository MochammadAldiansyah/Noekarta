@extends('landing.layouts.app')

@section('content')
<div class="flex items-center justify-center min-h-[calc(100vh-100px)]">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Buat Akun Baru</h2>

        <form action="{{ route('register') }}" method="POST">
            @csrf

            <!-- Input Nama -->
            <div class="mb-4">
                <label class="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                <input type="text" name="name" value="{{ old('name') }}" class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                @error('name') <span class="text-red-500 text-xs mt-1 block">{{ $message }}</span> @enderror
            </div>

            <!-- Input Email -->
            <div class="mb-4">
                <label class="block text-sm font-semibold text-gray-700 mb-1">Alamat Email</label>
                <input type="email" name="email" value="{{ old('email') }}" class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                @error('email') <span class="text-red-500 text-xs mt-1 block">{{ $message }}</span> @enderror
            </div>

            <!-- Input Password -->
            <div class="mb-4">
                <label class="block text-sm font-semibold text-gray-700 mb-1">Password (Minimal 8 Karakter)</label>
                <input type="password" name="password" class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                @error('password') <span class="text-red-500 text-xs mt-1 block">{{ $message }}</span> @enderror
            </div>

            <!-- Input Konfirmasi Password -->
            <div class="mb-6">
                <label class="block text-sm font-semibold text-gray-700 mb-1">Konfirmasi Password</label>
                <input type="password" name="password_confirmation" class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>

            <!-- Tombol Submit -->
            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 cursor-pointer">
                Daftar Sekarang
            </button>

            <p class="text-sm text-center text-gray-600 mt-4">
                Sudah punya akun? <a href="{{ route('login') }}" class="text-blue-600 hover:underline">Log in di sini</a>
            </p>
        </form>
    </div>
</div>
@endsection
