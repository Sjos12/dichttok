<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Dyrynda\Database\Support\GeneratesUuid;
use Illuminate\Support\Facades\Auth;

class Gedicht extends Model
{
    use HasFactory, GeneratesUuid;

    protected $table = 'gedichten';
    protected $appends = ['is_liked', 'is_analysed'];
    protected $fillable = [
        'titel',
        'gedicht',
        'auteur',
        'context',
    ];
    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function analyses()
    {
        return $this->hasMany(Analysis::class);
    }

    protected function isLiked(): Attribute
    {
        return Attribute::make(
            get: function () {
                if ($this->likes->where('user_id', Auth::user()->id)->isNotEmpty()) return true;
                return false;
            },
        );
    }
    protected function isAnalysed(): Attribute
    {
        return Attribute::make(
            get: function () {
                if ($this->analyses->where('user_id', Auth::user()->id)->isNotEmpty()) return true;
                return false;
            },
        );
    }
}
