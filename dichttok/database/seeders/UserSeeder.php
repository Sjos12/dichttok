<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $name = 'Denzel Stellingwerf';
        if (User::where('name', $name)->get()->isNotEmpty()) return;

        $user = new User();
        $user->name = $name;
        $user->email = 'denzelstellingwerf@outlook.com';
        $user->password = Hash::make('Sowhat12');
        $user->save();
    }
}
