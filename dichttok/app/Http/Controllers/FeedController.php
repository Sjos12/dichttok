<?php

namespace App\Http\Controllers;

use App\Models\Gedicht;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedController extends Controller
{
    //

    public function __invoke()
    {
        return Inertia::render('Dashboard', [
            'gedichten' => Gedicht::with('likes', 'comments', 'user')->orderBy('created_at', 'DESC')->get(),
        ]);
    }
}
