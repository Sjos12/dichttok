<?php

namespace App\Http\Controllers;

use App\Models\Gedicht;
use App\Models\Tag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    //

    public function search($query)
    {
        $results = Gedicht::search($query);
        return response()->json(['results' => $results]);
    }

    public function search_genres($query)
    {
        return response()->json([
            'genres' => Tag::search($query)->get(),
        ]);
    }
}
