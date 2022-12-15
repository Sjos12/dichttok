<?php

use App\Http\Controllers\FeedController;
use App\Http\Controllers\GedichtController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', FeedController::class)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/gedicht/create', [GedichtController::class, 'create'])->name('gedicht.create');
    Route::get('/gedicht/create', [GedichtController::class, 'create_index'])->name('gedicht.create.index');

    Route::post('/gedicht/{gedicht:uuid}/like', [GedichtController::class, 'like'])->name('gedicht.like');

    Route::get('/gedicht/{gedicht:uuid}/analyze', [GedichtController::class, 'analyze_index'])->name('gedicht.analyze.index');
});

require __DIR__ . '/auth.php';
