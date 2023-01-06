<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute as Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
