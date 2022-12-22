<?php

namespace App\Http\Controllers;

use App\Models\Gedicht;
use App\Models\HighlightFragment;
use App\Models\Stijlmiddel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class StijlmiddelController extends Controller
{
    //

    public function detail(Request $request, Stijlmiddel $stijlmiddel)
    {

        $fragments = HighlightFragment::where('stijlmiddel_id', $stijlmiddel->id)->with('analyse.gedicht')->get();

        return Inertia::render('Stijlmiddel', [
            'stijlmiddel' => $stijlmiddel,
            'fragments' => $fragments,
        ]);
    }
    public function list(Request $request)
    {

        return Inertia::render('Stijlmiddelen', [
            'stijlmiddelen' => Stijlmiddel::all(),
        ]);
    }
}
