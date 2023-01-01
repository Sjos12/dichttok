<?php

namespace App\Http\Controllers;

use App\Models\Gedicht;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedController extends Controller
{
    //

    public function __invoke()
    {
        return Inertia::render('Dashboard', [
            'gedichten' => Gedicht::withCount(
                'likes',
                'comments',
                'analyses'
            )
                ->with(
                    'user',
                    'analyses.user',
                    'analyses.highlight_fragments.stijlmiddel',
                    // 'analyses.stijlmiddel'
                )->orderBy('created_at', 'DESC')->get(),
            'genres' => Tag::all(),
        ]);
    }

    public function filter(Tag $tag)
    {
        return Inertia::render('Dashboard', [
            'genre' => $tag,
            'genres' => Tag::all(),
            'gedichten' => $tag->gedichten,
        ]);
    }
}
