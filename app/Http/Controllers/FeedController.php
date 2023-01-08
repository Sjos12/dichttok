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
        $paginator = Gedicht::withCount(
            'likes',
            'comments',
            'analyses',
            'tags'
        )
            ->with(
                'user',
                'analyses.user',
                'analyses.highlight_fragments.stijlmiddel',
                'comments.user',
                'comments.likes'
                // 'analyses.stijlmiddel'
            )->orderBy('created_at', 'DESC')->get();

        return Inertia::render('Dashboard', [
            'gedichten' => $paginator,
            'genres' => Tag::all(),
            // 'nextUrl' => $paginator->nextPageUrl(),
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
