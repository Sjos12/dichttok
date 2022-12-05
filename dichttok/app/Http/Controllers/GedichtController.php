<?php

namespace App\Http\Controllers;

use App\Models\Gedicht;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class GedichtController extends Controller
{

    public function create_index()
    {
        return Inertia::render('CreateGedicht', []);
    }
    //

    public function create(Request $request)
    {

        $validatedData = $request->validate([
            'titel' => 'required',
            'gedicht' => 'required',
            'auteur' => 'required',
            'context' => '',
        ]);

        $model = new Gedicht();
        return redirect()->route('dashboard');
    }
}
