<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Dyrynda\Database\Support\GeneratesUuid;
use Illuminate\Support\Facades\Auth;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\HasMedia;


class Gedicht extends Model implements HasMedia
{
    use HasFactory, GeneratesUuid, InteractsWithMedia;

    protected $table = 'gedichten';
    protected $appends = ['is_liked', 'is_analysed', 'voiceover'];
    protected $fillable = [
        'titel',
        'gedicht',
        'auteur',
        'context',

    ];
    public function highlight_fragments()
    {
        return $this->hasManyThrough(HighlightFragment::class, Analysis::class);
    }
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
    protected function voiceover(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->getFirstMediaUrl('audio');
            },
        );
    }
}
