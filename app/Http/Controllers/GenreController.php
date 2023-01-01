<?php

namespace App\Http\Controllers;

use App\Models\HighlightFragment;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GenreController extends Controller
{
    //    public function detail(Request $request, Stijlmiddel $stijlmiddel)
    public function detail(Tag $tag)
    {
        return Inertia::render('Dashboard', [
            'genre' => $tag,
            'gedichten' => $tag->gedichten,
        ]);
    }
    public function list(Request $request)
    {
        $tags_by_popularity = Tag::withCount('gedichten')->orderBy('gedichten_count', 'desc')->get();

        return Inertia::render('Genres', [
            'genres' => $tags_by_popularity,
        ]);
    }
}
