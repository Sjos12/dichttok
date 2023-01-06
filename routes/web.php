<?php

use App\Http\Controllers\AnalyseController;
use App\Http\Controllers\AnalysisController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FeedController;
use App\Http\Controllers\GedichtController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\StijlmiddelController;
use App\Models\Comment;
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

Route::get('/dashboard/filter/{tag:uuid}', [FeedController::class, 'filter'])->name('dashboard.filter');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/gedicht/create', [GedichtController::class, 'create'])->name('gedicht.create');
    Route::get('/gedicht/create', [GedichtController::class, 'create_index'])->name('gedicht.create.index');

    Route::post('/gedicht/{gedicht:uuid}/like', [GedichtController::class, 'like'])->name('gedicht.like');

    Route::get('/gedicht/{gedicht:uuid}/analyze', [AnalyseController::class, 'index'])->name('gedicht.analyze.index');

    Route::post('/gedicht/{gedicht:uuid}/analyze', [AnalyseController::class, 'create'])->name('gedicht.analyze.create');

    Route::get('/gedicht/{gedicht:uuid}/analysis/{analysis:uuid}/detail', [AnalyseController::class, 'detail'])->name('gedicht.analyze.detail');

    Route::get('/stijlmiddel/{stijlmiddel:uuid}', [StijlmiddelController::class, 'detail'])->name('stijlmiddel.detail');

    Route::get('/stijlmiddelen', [StijlmiddelController::class, 'list'])->name('stijlmiddelen');

    Route::get('/search/{query}', [SearchController::class, 'search'])->name('search');

    Route::get('/search/genres/{query}', [SearchController::class, 'search_genres'])->name('search_genres');

    Route::post('/gedicht/{gedicht:uuid}/comment', [CommentController::class, 'create'])->name('comment.create');

    Route::post('/comment/like', [CommentController::class,  'like'])->name('comment.like');
    // Route::get('/genres', [GenreController::class, 'list'])->name('genres');

    // Route::get('/genre/{tag:uuid}', [GenreController::class, 'detail'])->name('genre.detail');
});



require __DIR__ . '/auth.php';
