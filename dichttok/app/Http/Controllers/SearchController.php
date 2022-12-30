<?php

namespace App\Http\Controllers;

use App\Models\Gedicht;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    //

    public function search($query)
    {
        return redirect()->back()->with('results', Gedicht::search($query));
    }
}
