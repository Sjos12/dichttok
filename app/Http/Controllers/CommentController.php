<?php

namespace App\Http\Controllers;

use App\Models\Analysis;
use App\Models\Comment;
use App\Models\Gedicht;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    //
    public function like(Request $request)
    {
        $validatedData = $request->validate([
            'comment_id' => 'integer',
        ]);
        $comment = Comment::find($validatedData['comment_id']);
        // TODO: Check if gedicht should be available to user...
        $oldLike = $comment->likes()
            ->where('user_id', Auth::user()->id);

        if ($oldLike->exists()) {
            $oldLike->delete();
        } else {
            $like = new Like();
            $like->user_id = Auth::user()->id;
            $like->likeable_id = $comment->id;
            $like->likeable_type = Comment::class;
            $like->save();
        }
        return redirect()->back();
    }

    public function create(Request $request, Gedicht $gedicht)
    {
        $validatedData = $request->validate([
            'comment' => 'string|min:3|max:500|required',

        ]);

        $comment = new Comment();
        $comment->comment = $validatedData['comment'];
        $comment->gedicht_id = $gedicht->id;
        $comment->user_id = Auth::user()->id;
        $comment->save();
    }
}
