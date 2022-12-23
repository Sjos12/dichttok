<?php

namespace App\Http\Controllers;

use App\Models\Gedicht;
use App\Models\Like;
use App\Models\Stijlmiddel;
use Illuminate\Validation\Rules\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'context' => 'nullable',
            'voiceover' => 'nullable',
        ]);

        $model = new Gedicht($validatedData);
        $model->user_id = Auth::user()->id;
        $model->save();
        if (array_key_exists('voiceover', $validatedData)) {
            $model->addMedia($validatedData['voiceover'])->toMediaCollection(('audio'));
        }

        return redirect()->route('dashboard');
    }

    public function like(Gedicht $gedicht)
    {
        // TODO: Check if gedicht should be available to user...
        $oldLike = $gedicht->likes()
            ->where('user_id', Auth::user()->id);

        if ($oldLike->exists()) {
            $oldLike->delete();
        } else {
            $like = new Like();
            $like->user_id = Auth::user()->id;
            $like->gedicht_id = $gedicht->id;
            $like->save();
        }
        return redirect()->back();
    }
}
