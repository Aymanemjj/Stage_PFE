<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rewards extends Model
{
    protected $fillable = [
        'string',
        'description',
        "type",
        'requirements',
    ];
}
