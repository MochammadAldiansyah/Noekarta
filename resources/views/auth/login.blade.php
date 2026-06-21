@extends('landing.layouts.app')

@section('content')
<form action="{{ route('login') }}" method="POST" class="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
    @csrf

    <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input type="email" name="email" value="{{ old('email') }}" class="w-full border p-2 rounded" required>
        @error('email') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
    </div>

    <div class="mb-4">
        <label class="block text-gray-700">Password</label>
        <input type="password" name="password" class="w-full border p-2 rounded" required>
    </div>

    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
</form>

@endsection
