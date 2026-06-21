@extends('landing.layouts.app')

@section('content')
<section class="w-full bg-white min-h-[85vh] flex flex-col items-center justify-center px-4 md:px-6 pb-20 pt-10 font-poppins">
    <div class="flex flex-col items-center justify-center text-center">
        <!-- Baris Pertama dengan Gambar Dinamis -->
        <div class="flex items-center justify-center whitespace-nowrap gap-1 sm:gap-2 md:gap-4 lg:gap-5 xl:gap-6 text-[1.2rem] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight leading-[1.2] md:leading-[1.1]">
            <span>Dari Jejak</span>
            <!-- Pembungkus untuk gambar. Skala dikecilkan di desktop agar tidak melebihi batas -->
            <div id="hero-img-container" class="flex items-center justify-center h-6 sm:h-8 md:h-12 lg:h-20 xl:h-30 transition-[width] duration-500 ease-in-out">
                <img id="hero-title-img" src="{{ asset('assets/image/hero-title1.png') }}" class="h-full w-auto object-contain transition-opacity duration-500 ease-in-out" alt="Batavia">
            </div>
            <span>Menuju</span>
        </div>

        <!-- Baris Kedua -->
        <div class="mt-2 md:mt-4 lg:mt-5 xl:mt-6 text-[1.2rem] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tight leading-[1.2] md:leading-[1.1]">
            jakarta Kota Digital
        </div>
    </div>
</section>
@endsection
